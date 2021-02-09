<?php

namespace App\Notifications;

use App\Models\ProviderRejectionReason;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ServiceProviderDisqualificationNotification extends Notification
{
    use Queueable;

    public $reasons;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(ProviderRejectionReason $reasons)
    {
        $this->reasons = $reasons;
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
                    ->subject('Profile verification feedback')
                    ->line('We are sorry to inform you that the profile submition for verification you made has been rejected due to the following reasons:-')
                    ->line($this->reasons)
                    ->action('Visit the application to make changes and resubmit your profile', url('/'))
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
