<!DOCTYPE html>
<html lang="en">

<head>
	<base href="./">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
	<meta name="description" content="aplikasi dss">
	<meta name="author" content="Feri">
	<meta name="csrf_token" value="{{ csrf_token() }}">
	<meta name="keyword" content="Belajar Program untuk Skripsi">
	<title>@yield('title')</title>
	<link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="c-app">

	<div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
		@include('dashboard.shared.nav-builder')

		@include('dashboard.shared.header')
		<div class="c-body">
			<main class="c-main">
				<div id="app">
					@yield('content')
				</div>
			</main>
        @include('dashboard.shared.footer')
		</div>
	</div>

	<script src="{{ mix('js/app.js') }}"></script>
	@stack('scripts')
</body>

</html>