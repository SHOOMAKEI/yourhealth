<!-- NAVBAR START -->
<nav class="navbar navbar-expand-lg py-lg-3 navbar-dark">
    <div class="container">

        <!-- logo -->
        <a href="index.html" class="navbar-brand mr-lg-5">
            <img src="assets/images/logo.png" alt="" class="logo-dark" height="50" />
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i class="mdi mdi-menu"></i>
        </button>

        <!-- menus -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">

            <!-- left menu -->
            <ul class="navbar-nav mr-auto align-items-center">
                <li class="nav-item mx-lg-1">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#">FAQs</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#">Clients</a>
                </li>
                <li class="nav-item mx-lg-1">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>

            <!-- right menu -->
            <ul class="navbar-nav ml-auto align-items-center">
                @if (Route::has('login'))

                    @auth
                        <li class="nav-item mr-0 nav-item mx-lg-1">
                            <a href="{{ url('/dashboard') }}" class="nav-link">MyArticle</a>
                        </li>
                    @else
                        <li class="nav-item mr-0 nav-item mx-lg-1">
                            <a href="{{ route('login') }}" class="nav-link">Login</a>
                        </li>
                        @if (Route::has('register'))
                            <li class="nav-item mr-0">
                                <a href="{{ route('register') }}" class="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex"><i class="mdi mdi-account-plus-outline mr-2"></i>Get Started Here</a>
                            </li>
                        @endif
                    @endif

                @endif
            </ul>

        </div>
    </div>
</nav>
<!-- NAVBAR END -->
