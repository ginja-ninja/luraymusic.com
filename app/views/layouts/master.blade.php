<!doctype html>
<html>
    @include('_partials.head')

    <body class="{{ $bodyClass }}">

    <div class="wrapper" id="wrapper">

        @include('_partials.header')

        <section class="main" id="main">

            @yield('content')


        </section>

    </div>

    @yield('footer')

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    {{ HTML::script('assets/js/vendor/soundcloud.player.api.js') }}
    {{ HTML::script('assets/js/vendor/soundcloud.player.api.js') }}
    {{ HTML::script('assets/js/vendor/sc-player.js') }}
    {{ HTML::script('assets/js/vendor/jquery.colorbox-min.js') }}
    {{ HTML::script('assets/js/main.js') }}

    </body>
</html>