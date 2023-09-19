# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(email: "admin@example.com", name: "Admin", password: 'root', password_confirmation: 'root')
User.create(email: "test@example.com", name: "Tester", password: "password", password_confirmation: "password")

5.times do |x|
  Post.create(title: "Title #{x + 1}", body: "There are #{x} seeded posts above this one.", user_id: User.first.id)
end