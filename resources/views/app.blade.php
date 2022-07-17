<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0,user-scalable=0" />
    <meta property="og:image" itemprop="image" content="https://otaku-point.ch/media/otaku-point_header_min.png" />

    <title inertia>{{ config("app.name", "Laravel") }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" />

    <!-- Scripts -->
    @routes @vite('resources/js/app.js') @inertiaHead
</head>

<body class="font-sans antialiased" data-theme="dark">
    @inertia
</body>

</html>