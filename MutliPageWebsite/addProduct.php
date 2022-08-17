<!DOCTYPE html>

<html lang="en">
<head>
<title>Add Products</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="style.css" />

</head>
<body  >



	<div class="col-sm-8 col-md-8 col-lg-8  ">
		<div class="col-sm-12 col-md-12 col-lg-12 addProductsSection " >
			<div class="addProductsheadings">Add Products</div>
			<div class="col-sm-6 col-md-6 col-lg-6">
				<div class="addProductsinnerheadings">Product Name</div>
				<div>
					<input type="text" class="input" />
				</div>
				<div class="addProductsinnerheadings">Description</div>
				<div>
					<textarea name="desciption" style="width: 100%">Enter text here...</textarea>
				</div>
				<div class="addProductsinnerheadings">Category</div>
				<div>
					<select style="width: 100%; color: black; height: 50px;">
						<option value="">Select a Category</option>
						<option value="admin">New Arrival</option>
						<option value="customer">Most Popular</option>
						<option value="editor">Trending</option>
					</select>
				</div>
				<div class="col-md-6 col-sm-6 col-lg-6">
					<div class="col-sm-12 col-md-12 col-lg-12">
						<div class="addProductsinnerheadings">Expire Date</div>
						<input type="text" class="input" />
					</div>
				</div>
				<div class="col-md-6 col-sm-6 col-lg-6">
					<div class="col-sm-12 col-md-12 col-lg-12">
						<div class="addProductsinnerheadings">Units In Stock</div>
						<input type="text" class="input" />
					</div>
				</div>
			</div>
			<div class="col-sm-6 col-md-6 col-lg-6">
				<div class="addProductsinnerheadings">Update your profile</div>

				<div>
					<img src="img/user_4.png" />
					<button class="productButton">UPDATE PRODUCT IMAGE</button>
				</div>
			</div>
			<div>
				<button class="productButton">DELETE YOUR ACCOUNT</button>
			</div>
		</div>
	</div>
</body>
</html>
