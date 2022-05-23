class GameController < ApplicationController
  def play; end

  def result
    @title = 'You vs Curb'
    @again_link = play_path
    @p1 = validate_params(params)
    @p2 = random_rule

    if game.draw?(subject: @p1, opponent: @p2)
      game.add_score_draw
      return @result = 'Draw'
    end

    @result =
      if game.can_beat?(subject: @p1, opponent: @p2)
        game.add_score_victory
        'You won'
      else
        game.add_score_defeat
        'Curb won'
      end
  end

  private

  def game_params
    params.require(:event).permit(:title, :event_type, :link, :date_range, :place, :is_online, :image)
  end
end