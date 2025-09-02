# DevTinder

- Create a Vite+React application
- Remove unnecessary code and create a Hello World App
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx separate Component file
- Install react router dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body Component
- Create a Footer
- Create a Login Page
- Install axios
- CORS - install cors in backend => add middleware to app with configurations: origin, credetnials: true
- Whenever you're making API call so pass axios => {withCredentials: true}
- Install Redux Toolkit - https://redux-toolkit.js.org/tutotials/quick-start
- Install react-redux + @reduxjs/toolkit => configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to addd constants file + create components folder
- You should not be able to access other routes without login
- If token is not present, redirect user to login page
- Logout Feature
- Get the feed and add the feed in the store
- build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile
- See all my connections
- New Page - See all my connections
- New Page - See all my Connection Requests
- Feature - Accept/Reject connection request
- Send/Ignore the user card from the feed
- Signup New User

Body
NavBar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Router=/profile => Profile

# Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- ssh -i "devTinder-secret.pem" ubuntu@ec2-13-236-69-4.ap-southeast-2.compute.amazonaws.com
- Install Node version 22.18.0
- Git clone
- Frontend

  - npm install -> dependencies install
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build files) to /var/www/html
  - sudo scp -r dist/\* /var/www/html/
  - Enable port :80 on your instance

- Backend
  - updated DB password
  - allowed ec2 instance public IP on mongodb server (u r whitelisting the ip)
  - npm install pm2 -g
  - pm2 start npm --name "devTinder-backend" -- start
  - pm2 logs
  - pm2 list, pm2 flush <name> , pm2 stop <name> , pm2 delete <name>
  - config nginx - /etc/nginx/sites-available/default
  - restart nginx - sudo systemctl restart nginx
  - Modify the BASEURL in front end project to /api

# nginx config:

Frontend = http://43.204.96.49/
Backend = http://43.204.96.49:7777/

Domain name = devTinder.com => 43.204.96.49

Frontend = devTinder.com
Backend = devTinder.com:7777 => devTinder.com/api

server_name 43.204.96.49;

# NGINX CONFIG:

location /api/ {
proxy_pass http://127.0.0.1:7777/;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}
