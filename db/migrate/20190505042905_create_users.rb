class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :coins, default: 2000 
      t.string :auth_token

      t.timestamps
    end
  end
end
