module ApplicationHelper
  def render_icon(icon, classes: nil)
    classes ||= ""
    render "icons/#{icon}", classes: classes
  end

  def is_help_path
    controller_name == 'components' && action_name == 'index'
  end
end
