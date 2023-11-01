class CreateRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rounds do |t|
      t.references :game
      t.datetime :started_at
      t.datetime :completed_at
      t.datetime :ended_at

      t.timestamps
    end
  end
end
