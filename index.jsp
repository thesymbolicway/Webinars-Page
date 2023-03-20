<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Industrial Info Resources</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<%@ include file="header.html" %>

	<main>
		<h1>Welcome to Industrial Info Resources</h1>
		<p>Check out our upcoming webinars:</p>

		<!-- We'll use JavaScript to populate this section -->
		<section id="webinar-section"></section>
	</main>

	<%@ include file="footer.html" %>

	<script type="text/javascript" src="js/populate-webinars.js"></script>
</body>
</html>
