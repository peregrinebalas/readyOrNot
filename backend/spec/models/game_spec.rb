require 'rails_helper'

describe Game, type: :model do
    describe 'validations' do
        it { should validate_presence_of :round_count }
        it { should validate_presence_of :active }
        it { should validate_presence_of :complete }
    end

    describe 'relationships' do
        it { should belong_to :user }
        it { should have_many :rounds }
    end  

    describe 'instance methods' do
    end

    describe 'class methods' do
    end
end