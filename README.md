# Financial Logger Project

The Financial Logger Project is a TypeScript-based application designed to help users log and track their financial transactions. This project provides a user-friendly command-line interface (CLI) for users to input their income and expenses, and it stores and presents the financial data in an organized manner.

## Features

- Log Income: Users can easily record their income with a specified description and amount.
- Log Expenses: Users can log their expenses by providing a description, amount, and category for better tracking.
- Categorization: Expenses can be categorized into different predefined categories for better expense analysis.
- View Summary: Users can view a summary of their income, expenses, and net savings over a specified period.
- Data Persistence: All financial transactions are stored locally in a data file for future reference.

## Installation

1. Clone or download the repository.
2. Navigate to the project directory: `cd financial-logger`.
3. Install dependencies: `npm install`.

## Usage

To run the Financial Logger application, follow these steps:

1. Open a terminal in the project directory.
2. Run the following command to start the application:

   ```bash
   npm start
   ```

3. Follow the on-screen instructions to log your income and expenses.

## Commands

- `log-income`: Log a new income transaction.
- `log-expense`: Log a new expense transaction.
- `view-summary`: View a summary of your financial transactions.

## Configuration

You can customize certain aspects of the application by modifying the `config.ts` file. Here are some of the configuration options available:

- `dataFilePath`: Specifies the file path where the financial data will be stored.
- `dateFormat`: Defines the format for displaying dates in the application.

## Contributing

Contributions to the Financial Logger Project are welcome! If you find a bug, have an idea for an enhancement, or would like to add new features, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Make your changes and commit them: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request detailing your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Financial Logger Project was inspired by the need for individuals to easily track their financial transactions and gain insights into their spending habits.

---

**Note:** This project is for educational and illustrative purposes only. It is not intended for actual financial management and should not be used for sensitive financial data.

For any questions or inquiries, please contact abokistifanusmadaki@gmail.com
