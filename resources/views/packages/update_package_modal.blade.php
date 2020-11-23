<div id="update-package-{{$package->id}}" class="modal fade p-3" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="update-package-{{$package->id}}Label" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="update-package-{{$package->id}}Label">Add new required attachment</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form action="{{route('packages.update',['package' => $package->id])}}" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="package-name">{{__('packages.create.package_name')}}</label>
                                <input type="text" id="package-name" name="package_name" value="{{$package->name}}" class="form-control @error('package_name') is-invalid @enderror" placeholder="{{__('packages.create.package_name')}}" required>
                                <div class="invalid-tooltip"> </div>
                                @error('package_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
            
                            <div class="form-group mb-3">
                                <label for="package-description">{{__('packages.create.package_description')}}</label>
                                <input type="text" id="package-description" name="package_description" value="{{$package->description}}" class="form-control @error('package_description') is-invalid @enderror" placeholder="{{__('packages.create.package_description')}}" required>
                                <div class="invalid-tooltip"> </div>
                                @error('package_description')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group mb-3">
                                <label for="package-price">{{__('packages.create.package_price')}}</label>
                                <input type="text" id="package-price" name="package_price" value="{{$package->price}}" class="form-control @error('package_price') is-invalid @enderror" placeholder="{{__('packages.create.package_price')}}" required>
                                <div class="invalid-tooltip"> </div>
                                @error('package_price')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group mb-3">
                                <label for="package-invoice-period">{{__('packages.create.package_invoice_period')}}</label>
                                <input type="text" id="package-invoice-period" name="package_invoice_period" value="{{$package->invoice_period}}" class="form-control @error('package_invoice_period') is-invalid @enderror" placeholder="{{__('packages.create.package_invoice_period')}}" required>
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
                                    <option  disabled>{{__('packages.create.package_invoice_interval')}}</option>
                                    @foreach (getInvoiceInterval() as $interval)
                                    <option value="{{$interval['value']}}" @if ($interval['value'] == $package->invoice_interval)
                                        selected
                                    @endif>{{$interval['option']}}</option>
                                    @endforeach
                                </select> 
                                @error('package_invoice_interval')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror  
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group mb-3">
                                <label for="package-trial-period">{{__('packages.create.package_trial_period')}}</label>
                                <input type="text" id="package-trial-period" name="package_trial_period" value="{{$package->trial_period}}" class="form-control @error('package_trial_period') is-invalid @enderror" placeholder="{{__('packages.create.package_trial_period')}}" required>
                                <div class="invalid-tooltip"> </div>
                                @error('package_trial_period')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="form-group mb-3">
                                <label for="package-sort-order">{{__('packages.create.package_sort_order')}}</label>
                                <input type="text" id="package-sort-order" name="package_sort_order" value="{{$package->sort_order}}" class="form-control @error('package_sort_order') is-invalid @enderror" placeholder="{{__('packages.create.package_sort_order')}}" required>
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
                                    <option  disabled>{{__('packages.create.package_currency')}}</option>
                                    @foreach (getCurrency() as $currency)
                                    <option value="{{$currency['value']}}" @if ($currency['value']==$package->currency)
                                        selected
                                    @endif>{{$currency['option']}}</option>
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
                                    <option disabled>{{__('packages.create.package_category')}}</option>
                                    @foreach (getPackageCategories() as $category)
                                    <option value="{{$category['value']}}" @if ($category['value']==$package->category)
                                        selected
                                    @endif>{{$category['option']}}</option>
                                    @endforeach
                                </select> 
                                @error('package_category')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror  
                            </div>
                        </div>
                    </div>
                    @csrf
                        
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                    </form>                                           
                      
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->