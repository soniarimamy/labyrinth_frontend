import pytest
from main import app


@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client


def test_index_route(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"Labyrinth Game" in response.data


@pytest.mark.parametrize("dx,dy,new_x,new_y", [
    (-1, 0, 0, 2),
    (1, 0, 2, 2),
    (0, -1, 1, 1),
    (0, 1, 1, 3),
])
def test_move_player_simulated(dx, dy, new_x, new_y):
    player = {"x": 1, "y": 2}
    size = 5

    test_x = player['x'] + dx
    test_y = player['y'] + dy

    if 0 <= test_x < size and 0 <= test_y < size:
        player['x'] = test_x
        player['y'] = test_y

    assert player['x'] == new_x
    assert player['y'] == new_y
