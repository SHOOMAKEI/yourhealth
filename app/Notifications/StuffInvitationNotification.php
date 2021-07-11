<?php

namespace App\Notifications;

use App\Models\ProviderFacility;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class StuffInvitationNotification extends Notification
{
    use Queueable;
    public $facility;
    public $token;
    public $role;
    public $email;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(ProviderFacility $facility, string $token, string $role, string $email)
    {
        $this->facility = $facility;
        $this->token = $token;
        $this->role = $role;
        $this->email = $email;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Invitation to join ' . $this->facility->name)
                    ->line('Your have been invited to join Afyacom profile of '. $this->facility->name . 'as an '. $this->role. '.')
                    ->line('Once you’ve joined, you can invite people from your organization to join, manage their roles, and collaborate on your organization profile. ')
                    ->action('Notification Action', url('/stuff-invitation/'. $this->token.'/'. $this->email))
                    ->line('Afyacom is a online medical platform for patients. ')
                    ->line('Afyacom simplifies the process of booking appointment and ordering medicine for patients.')
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
