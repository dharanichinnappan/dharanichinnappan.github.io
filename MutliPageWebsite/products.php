<?php include 'database.php'; ?>
<!DOCTYPE html>

<html lang="en">
<head>
<title>Products</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>

	<div class="col-sm-8 col-md-8 col-lg-8 section">
		<div class="col-sm-12 col-md-12 col-lg-12 innerSection">
			<div class="sectionContent">
				<table style="width: 100%;">
					<tr>
						<th>PRODUCT NAME</th>
						<th>UNIT SOLD</th>
						<th>IN STOCK</th>
						<th>EXPIRE DATE</th>
						<th></th>
					</tr>
					<!-- fetching data from database using PHP-->
                        <?php
                        $array = array();
                        $query = " SELECT * FROM products  ";
                        $result = $conn->query($query);

                        while ($row = $result->fetch_assoc()) {
                            $array[] = $row;
                        }
                        foreach ($array as $item) {

                            echo "<tr>";
                            echo "<td>" . $item['productName'] . "</td>";
                            echo "<td>" . $item['unitSold'] . "</td>";
                            echo "<td>" . $item['inStock'] . "</td>";
                            echo "<td>" . $item['expireDate'] . "</td>";
                            echo "<td>"?> <i class="fa fa-trash"></i><?php "</td>"?>					
                            <?php
                            echo "</tr>";
                        }
                        ?>
                    </table>
			</div>
			<a href="#/addProduct"><button class="productButton">ADD NEW PRODUCTS</button></a>
			<button class="productButton">DELETE PRODUCTS</button>
		</div>
	</div>

	<div class="col-sm-3 col-md-3 col-lg-3 section">
		<div class="col-sm-12 col-md-12 col-lg-12 innerSection">
			<div style="color: white;">Product Categories</div>
			<div class="sectionContent">
				<table>

                        <?php

                        $array = array();
                        $query = " SELECT * FROM ProductCategory  ";
                        $result = $conn->query($query);

                        while ($row = $result->fetch_assoc()) {
                            $array[] = $row;
                        }
                        foreach ($array as $item) {

                            echo "<tr>";
                            echo "<td>" . $item['category'] . "</td>";
                            echo "<td>"?> <i class="fa fa-trash"></i>
					</td>
                            <?php
                            echo "</tr>";
                        }
                        ?>
                    </table>
			</div>
			<button class="productButton">ADD NEW CATEGORY</button>

		</div>
	</div>


</body>
</html>
