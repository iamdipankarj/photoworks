PhotoWorks.ai

To create a fresh RoR application with tailwind and js bunlder, use the following:
```
rails new photoworks --css=tailwind --database=postgresql --skip-test -j esbuild
```
Followed by:
```
./bin/setup
./bin/dev
```
An error may occur saying that ActiveRecord::ConnectionNotEstablished
It is likely because the role doesn't exist in the current postgres service.
A role with an username and password can be created by referring to the following:
[https://stackoverflow.com/questions/41539905/new-rails-install-activerecordnodatabaseerror-fatal-role-does-not-exist](https://stackoverflow.com/questions/41539905/new-rails-install-activerecordnodatabaseerror-fatal-role-does-not-exist)

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
