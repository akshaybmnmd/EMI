<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="../images/bank.png" type="image/x-icon" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <title>Admin</title>
    </head>

    <body>
        <header class="bg-gradient-to-r from-purple-800 via-indigo-400 to-indigo-500 py-2 px-12">
            <div class="flex items-center">
                <div class="flex items-center space-x-4 flex-grow">
                    <img class="w-16 h-16 object-contain" src="../images/bank.png" alt="logo" />
                    <h1 class="text-2xl md:text-3xl lg:text-3xl font-semibold text-purple-100">
                        EMI Dashboard
                    </h1>
                </div>

                <button id="logout_button" class="bg-transparent px-4 py-2 text-white border border-white rounded-lg hover:bg-purple-600 transition duration-700">
                    Logout
                </button>
            </div>
        </header>

        <main>
            <section class="max-w-screen-lg mx-auto px-12 my-12">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                    <div class="bg-blue-200 rounded-lg shadow-xl p-6 box-border">
                        <h3 class="text-xl text-blue-600">Next EMI</h3>
                        <h1 class="text-4xl font-bold text-blue-700">
                            Rs <span id="next_emi">0</span>
                        </h1>
                    </div>

                    <div class="bg-red-200 rounded-lg shadow-xl p-6 box-border">
                        <h3 class="text-xl text-red-600">Balance</h3>
                        <h1 class="text-4xl font-bold text-red-700">
                            Rs <span id="balance_total">0</span>
                        </h1>
                    </div>

                    <div class="bg-green-200 rounded-lg shadow-xl p-6 box-border">
                        <h3 class="text-xl text-green-600">Paid</h3>
                        <h1 class="text-4xl font-bold text-green-700">
                            Rs <span id="paid_total">0</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section class="max-w-screen-lg mx-auto px-12 my-12">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-50 p-8 box-border rounded-lg">
                    <div>
                        <h3 class="text-gray-500 text-2xl pb-4">Please Deposit</h3>

                        <div class="flex flex-col space-y-4">
                            <input id="deposit_money_field" class="border border-gray-400 py-3 px-6 w-66 h-12 rounded-lg focus:outline-none focus:border-purple-800 text-gray-600" type="number" placeholder="Deposit Amount" />
                            <p id="deposit_error_messege" class="text-red-500 font-semibold" ></p>
                            <button id="deposit_button" class="text-white bg-purple-800 w-24 px-4 py-2 rounded-lg flex justify-center border border-purple-500 hover:bg-purple-200 hover:text-purple-800 transition duration-700">
                                Deposit
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-gray-500 text-2xl pb-4">Please Withdraw</h3>

                        <div class="flex flex-col space-y-4">
                            <input id="withdraw_money_field" class="border border-gray-400 py-3 px-6 w-66 h-12 rounded-lg focus:outline-none focus:border-purple-800 text-gray-600" type="number" placeholder="Withdraw Amount" />
                            <p id="withdraw_error_messege" class="text-red-500 font-semibold"></p>
                            <button id="withdraw_button" class="text-white bg-purple-800 w-24 px-4 py-2 rounded-lg flex justify-center border border-purple-500 hover:bg-purple-200 hover:text-purple-800 transition duration-700">
                                Withdraw
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <script src="../js/admin_dashboard.js?code=<?php echo rand(); ?>"></script>
    </body>
</html>