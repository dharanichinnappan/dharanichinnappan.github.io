
<?php include 'database.php'; ?>
<!DOCTYPE html>

<html lang="en">
<head>
<link rel="stylesheet" href="style.css" />
</head>

<body>

	<div class="col-sm-12 col-md-12 col-lg-12 headings">
		Welcome Back,<b> Admin </b>
	</div>

	<!-- sections -->
	<div class="col-sm-12 col-md-12 col-lg-12 content">

		<div class="col-sm-6 col-md-6 col-lg-6 contentBox ">
			<div class="col-sm-12 col-md-12 col-lg-12 sections">
				<div class="headings">
					<b>Latest Hits</b>
				</div>
				<img src="img/Performance.png" style="padding: 25px; height: 300px;" />
			</div>


		</div>
		<div class="col-sm-6 col-md-6 col-lg-6 contentBox">
			<div class="col-sm-12 col-md-12 col-lg-12 sections">
				<div class="headings">
					<b>Performance</b>
				</div>
				<img src="img/latestHits.png" style="padding: 25px; height: 300px;" />
			</div>

		</div>

		<div class="col-sm-6 col-md-6 col-lg-6 contentBox">
			<div class="col-sm-12 col-md-12 col-lg-12 sections">
				<div class="headings">
					<b>Storage Information</b>
				</div>
				<img src="img/StorageInformation.png"
					style="padding: 25px; height: 300px;" />
			</div>

		</div>

		<div class="col-sm-6 col-md-6 col-lg-6 contentBox">
			<div class="col-sm-12 col-md-12 col-lg-12 sections">
				<div class="headings">
					<b>Notification List</b>
				</div>
				<div class="col-sm-12 col-md-12 col-lg-12 notificationScrollable">
					<div class="col-sm-12 col-md-12 col-lg-12 notification">
						<div class="col-sm-2 col-md-2 col-lg-2">
							<img src="img/user_1.jpg" style="border-radius: 50%; width: 100%" />
						</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Jessica and 3 others sent you new product updates.Check new
							orders.
							<div>6h ago.</div>
						</div>

					</div>

					<div class="col-sm-12 col-md-12 col-lg-12 notification">
						<div class="col-sm-2 col-md-2 col-lg-2">
							<img src="img/user_2.jpg" style="border-radius: 50%; width: 100%" />
						</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Jessica and 3 others sent you new product updates.Check new
							orders.
							<div>6h ago.</div>
						</div>

					</div>

					<div class="col-sm-12 col-md-12 col-lg-12 notification">
						<div class="col-sm-2 col-md-2 col-lg-2">
							<img src="img/user_3.jpg" style="border-radius: 50%; width: 100%" />
						</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Jessica and 3 others sent you new product updates.Check new
							orders.
							<div>6h ago.</div>
						</div>

					</div>

					<div class="col-sm-12 col-md-12 col-lg-12 notification">
						<div class="col-sm-2 col-md-2 col-lg-2">
							<img src="img/user_2.jpg" style="border-radius: 50%; width: 100%" />
						</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Jessica and 3 others sent you new product updates.Check new
							orders.
							<div>6h ago.</div>
						</div>

					</div>


					<div class="col-sm-12 col-md-12 col-lg-12 notification">
						<div class="col-sm-2 col-md-2 col-lg-2">
							<img src="img/user_1.jpg" style="border-radius: 50%; width: 100%" />
						</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Jessica and 3 others sent you new product updates.Check new
							orders.
							<div>6h ago.</div>
						</div>

					</div>


					<div class="col-sm-12 col-md-12 col-lg-12 notification">
						<div class="col-sm-2 col-md-2 col-lg-2">
							<img src="img/user_2.jpg" style="border-radius: 50%; width: 100%" />
						</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Jessica and 3 others sent you new product updates.Check new
							orders.
							<div>6h ago.</div>
						</div>

					</div>


					<div class="col-sm-12 col-md-12 col-lg-12 notification">
						<div class="col-sm-2 col-md-2 col-lg-2">
							<img src="img/user_3.jpg" style="border-radius: 50%; width: 100%" />
						</div>
						<div class="col-sm-10 col-md-10 col-lg-10">
							Jessica and 3 others sent you new product updates.Check new
							orders.
							<div>6h ago.</div>
						</div>

					</div>
				</div>
			</div>

		</div>

		<!-- table section -->

		<div class="col-sm-12 col-md-12 col-lg-12 contentBox">

			<div class="col-sm-12 col-md-12 col-lg-12 sections table ">
				<div class="headings">Order List:</div>
				<table>
					<tr>
						<th>ORDER NUMBER</th>
						<th>STATUS</th>
						<th>OPERATORS</th>
						<th>LOCATION</th>
						<th>DISTANCE</th>
						<th>START DATE</th>
						<th>EST DELIVERY DUE</th>
					</tr>
					<!-- fetching data from database using PHP-->
                        <?php
                        $array = array();
                        $query = " SELECT orderNumber,productStatus,operator,location,distance,startDate,estimatedDeliveryDate FROM orderLists  ";
                        $result = $conn->query($query);

                        while ($row = $result->fetch_assoc()) {
                            $array[] = $row;
                        }?>
                        
                       <?php  foreach ($array as $item) {

                            echo "<tr>";
                            echo "<td>" . $item['orderNumber'] . "</td>";
                            echo "<td>"  . $item['productStatus'] . "</td>";
                            echo "<td>" . $item['operator'] . "</td>";
                            echo "<td>" . $item['location'] . "</td>";
                            echo "<td>" . $item['distance'] . "km" . "</td>";
                            echo "<td>" . $item['startDate'] . "</td>";
                            echo "<td>" . $item['estimatedDeliveryDate'] . "</td>";
                            echo "</tr>";
                        }
                        ?>
                    </table>
			</div>
		</div>
	</div>




</body>
</html>
