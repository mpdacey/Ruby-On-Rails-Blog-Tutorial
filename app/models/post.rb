class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_noticed_notifications model_name: 'Notification'
  has_many :notifications, through: :user, dependent: :destroy

  def self.ransackable_attributes(auth_object = nil)
    ["body", "title"]
  end

  def self.ransackable_associations(auth_object = nil)
    ["user"]
  end
end