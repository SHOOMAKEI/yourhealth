<!-- START PRICING -->
<section class="py-5 bg-light-lighten border-top border-bottom border-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center">
                    <h1 class="mt-0"><i class="mdi mdi-tag-multiple"></i></h1>
                    <h3>Choose Simple <span class="text-primary">Pricing</span></h3>
                    <p class="text-muted mt-2">The clean and well commented code allows easy customization of the
                        theme.It's designed for
                        <br>describing your app, agency or business.</p>
                </div>
            </div>
        </div>

        <div class="row mt-5 pt-3">
            @foreach ($client_packages as $package)
                <div class="col-md-4">
                    <div class="card card-pricing @if ($loop->index==1) card-pricing-recommended  @endif">
                        <div class="card-body text-center">
                            @if ($loop->index==1) <div class="card-pricing-plan-tag">Recommended</div> @endif
                            <p class="card-pricing-plan-name font-weight-bold text-uppercase">{{$package->name}}</p>
                            <i class="card-pricing-icon dripicons-user text-primary"></i>
                            <h2 class="card-pricing-price">@money($package->price, $package->currency, true)<span>/ {{$package->invoice_interval}}</span></h2>
                            <ul class="card-pricing-features">
                                @foreach ($package->features as $feature)
                                    <li>{{$feature->value}} {{$feature->name}}</li>
                                @endforeach
                            </ul>
                        <a href="{{ route('register') }}" class="btn btn-primary mt-4 mb-2 btn-rounded">Get Started</a>
                        </div>
                    </div>
                    <!-- end Pricing_card -->
                </div>
                <!-- end col -->
            @endforeach

        </div>

    </div>
</section>
<!-- END PRICING -->