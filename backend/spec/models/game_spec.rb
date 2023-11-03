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
        describe '#active?' do
            let(:game) {
            }
            it 'returns false if not started' do
            end

            it 'returns true if started and not completed' do
            end

            it 'returns false if completed' do
            end
        end

        describe '#complete?' do
            it 'returns false if not completed' do
            end

            it 'returns true if completed' do
            end
        end
    end

    describe 'class methods' do
    end
end