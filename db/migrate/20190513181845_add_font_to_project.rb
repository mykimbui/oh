class AddFontToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :font, :string
    add_column :projects, :download, :string
    add_column :projects, :undernote, :string
  end
end
