# Clone The issue tracking project

```bash
git clone https://github.com/prantomollick/issue-tracker-next.js-app.git
```

### Install MYSQL Database into you system

```bash
https://dev.mysql.com/downloads/installer/
```

### Install all packages

```bash
npm i
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Install Mysql Provide the mysql database link to the below env file

```bash
DATABASE_URL="mysql://janedoe:mypassword@localhost:3306/mydb"
```
### After Mysql Connection setup with prisma
```bash
prisma migrate dev
```

### Configure Next-auth and provider Google

```bash
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
```

### Dashboard

![Dashboard](/dashboard_screenshot.jpg)

### Edit and insert issue page form

![Dashboard](/edit_insert_issue_page_screenshot.jpg)

### Issue List Page

![Issue List](/issue_page_screenshot.jpg)

### Issue Details Page

![Issue Details](/issue_details_page_screenshot.jpg)
