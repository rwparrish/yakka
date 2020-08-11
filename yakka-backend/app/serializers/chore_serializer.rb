class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :reward, :completed
  belongs_to :category
end
