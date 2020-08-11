class CreateChores < ActiveRecord::Migration[6.0]
  def change
    create_table :chores do |t|
      t.string :name
      t.string :description
      t.integer :reward
      t.boolean :completed
      t.integer :category_id

      t.timestamps
    end
  end
end
