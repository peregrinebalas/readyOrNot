class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.references :user
      t.boolean :timed, null: false
      t.integer :default_timer_seconds
      t.datetime :started_at
      t.datetime :completed_at

      t.timestamps
    end
  end
end
