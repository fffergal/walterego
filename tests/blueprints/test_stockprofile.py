from walterego.blueprints import stockprofile


def test_stock_profiles_data_path():
    assert stockprofile.STOCK_PROFILE_DATA_PATH.exists()
