class AddBackgroundToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :background, :string
  end
end
