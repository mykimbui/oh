class ApplicationController < ActionController::Base
  before_action :set_cache_headers

  private

  def set_cache_headers
    response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
  end
  def default_url_options
    { host: ENV["HOST"] || "localhost:3000" }
  end

end
