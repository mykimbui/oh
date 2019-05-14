module ApplicationHelper
  def link_to_blank(body, url_options = {}, html_options = {})
    link_to(body, url_options, html_options.merge(target: "_blank"))
  end

  # def bitmap?(data)
  #   return data[0,2]=="MB"
  # end

  # def gif?(data)
  #   return data[0,4]=="GIF8"
  # end

  # def jpeg?(data)
  #   return data[0,4]=="\xff\xd8\xff\xe0"
  # end

  # def file_is_image?(filename)
  #   f = File.open(filename,'rb')  # rb means to read using binary
  #   data = f.read(9)              # magic numbers are up to 9 bytes
  #   f.close
  #   return bitmap?(data) or gif?(data) or jpeg?(data)
  # end

end
