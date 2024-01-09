class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email 
      t.string :uid
      t.string :username
      t.string :first_name
      t.string :last_name
      
      t.timestamps
    end
  end
end
