@extends('layouts.master')

@section('header')
{{__('packages.create.header')}}
@endsection

@section('contents')
<div class="col-lg-12">
    <div class="card">
        <div class="card-body">

        <h4 class="header-title">{{__('packages.create.form_header')}}</h4>
            <p class="text-muted font-14">
                
            </p>
        <form action="{{route('packages.store')}}" method="POST">
            @csrf
                <div class="form-group mb-3">
                    <label for="package-name">{{__('packages.create.package_name')}}</label>
                    <input type="text" id="package-name" name="package_name" class="form-control @error('package_name') is-invalid @enderror" placeholder="{{__('packages.create.package_name')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('package_name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group mb-3">
                    <label for="package-description">{{__('packages.create.package_description')}}</label>
                    <input type="text" id="package-description" name="package_description" class="form-control @error('package_description') is-invalid @enderror" placeholder="{{__('packages.create.package_description')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('package_description')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="package-price">{{__('packages.create.package_price')}}</label>
                    <input type="text" id="package-price" name="package_price" class="form-control @error('package_price') is-invalid @enderror" placeholder="{{__('packages.create.package_price')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('package_price')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="package-invoice-period">{{__('packages.create.package_invoice_period')}}</label>
                    <input type="text" id="package-invoice-period" name="package_invoice_period" class="form-control @error('package_invoice_period') is-invalid @enderror" placeholder="{{__('packages.create.package_invoice_period')}}" required>
                    <div class="invalid-tooltip"></div>
                    @error('package_invoice_period')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="package-invoice-interval">{{__('packages.create.package_invoice_interval')}}</label>
                    <select class="custom-select mb-3" name="package_invoice_interval" required>
                        <option selected disabled>{{__('packages.create.package_invoice_interval')}}</option>
                        @foreach (getInvoiceInterval() as $interval)
                        <option value="{{$interval['value']}}">{{$interval['option']}}</option>
                        @endforeach
                    </select> 
                    @error('package_invoice_interval')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror  
                </div>
                <div class="form-group mb-3">
                    <label for="package-trial-period">{{__('packages.create.package_trial_period')}}</label>
                    <input type="text" id="package-trial-period" name="package_trial_period" class="form-control @error('package_trial_period') is-invalid @enderror" placeholder="{{__('packages.create.package_trial_period')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('package_trial_period')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="package-sort-order">{{__('packages.create.package_sort_order')}}</label>
                    <input type="text" id="package-sort-order" name="package_sort_order" class="form-control @error('package_sort_order') is-invalid @enderror" placeholder="{{__('packages.create.package_sort_order')}}" required>
                    <div class="invalid-tooltip"> </div>
                    @error('package_sort_order')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                <div class="form-group mb-3">
                    <label for="package-currency">{{__('packages.create.package_currency')}}</label>
                    <select class="custom-select mb-3" name="package_currency" required>
                        <option selected disabled>{{__('packages.create.package_currency')}}</option>
                        @foreach (getCurrency() as $currency)
                        <option value="{{$currency['value']}}">{{$currency['option']}}</option>
                        @endforeach
                    </select> 
                    @error('package_curreny')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror  
                </div>
                <div class="form-group mb-3">
                    <label for="package-category">{{__('packages.create.package_category')}}</label>
                    <select class="custom-select mb-3" name="package_category" required>
                        <option selected disabled>{{__('packages.create.package_category')}}</option>
                        @foreach (getPackageCategories() as $category)
                        <option value="{{$category['value']}}">{{$category['option']}}</option>
                        @endforeach
                    </select> 
                    @error('package_category')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror  
                </div>
                <button type="submit" class="btn btn-primary">{{__('packages.create.save')}}</button>
            </form>                                           
              
        </div> <!-- end card-body -->
    </div> <!-- end card -->
</div>
@endsection