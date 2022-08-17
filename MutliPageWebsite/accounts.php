<!DOCTYPE html>

<html lang="en">
    <head>  
     <title>Accounts</title>      
        <link rel="stylesheet" href="style.css" />       
    </head>
    <body >      

        <div class="col-sm-12 col-md-12 col-lg-12 accountSection " >
            <div class="col-sm-12 col-md-12 col-lg-12 accountInnerSection" >
                <div class="headings">
                    List of Accounts: 
                </div>
                <div>
                    Accounts
                </div>
                <div>
                    <select style="width: 100%;color:black;height: 50px;">
                        <option value="">Select a account</option>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                        <option value="editor">Editor</option>
                        <option value="merchant">Merchant</option>
                    </select>
                </div>

            </div>
        </div>


        <div class="col-sm-4 col-md-4 col-lg-4 accountSection " >
            <div class="col-sm-12 col-md-12 col-lg-12 accountInnerSection " >
                <div class="headings">
                    Change Avatar
                </div>
                <div>
                    <img src="img/user_4.png" width="100%"/>
                </div>
                <div>
                    <button class="productButton">UPLOAD NEW PHOTO</button>
                </div>
            </div>
        </div>
        <div class="col-sm-8 col-md-8 col-lg-8 accountSection " >
            <div class="col-sm-12 col-md-12 col-lg-12 accountInnerSection" >
                <div class="headings">
                    Account Settings
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6" >
                    Account Name
                    <div>
                        <input type="text" class="input" />
                    </div>
                    Password
                    <div>
                        <input type="password" class="input" />
                    </div>
                    Phone
                    <div>
                        <input type="text" class="input" />
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-6" >
                    Account Email
                    <div>
                        <input type="email" class="input" />
                    </div>
                    Reenter Password
                    <div>
                        <input type="password" class="input"/>
                    </div>
                    Update your profile
                    <div>
                        <button class="productButton">UPDATE YOUR PROFILE</button>
                    </div>
                </div>
                <div>
                    <button class="productButton">DELETE YOUR ACCOUNT</button>
                </div>
            </div>
        </div>
    </body>
</html>
