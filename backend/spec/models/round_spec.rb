require 'rails_helper'

describe Round, type: :model do
    describe 'validations' do
        it { should validate_presence_of :timer }
        it { should validate_presence_of :active }
    end

    describe 'relationships' do
        it { should belong_to :game }
    end  

    describe 'instance methods' do
    end

    describe 'class methods' do
    end
end