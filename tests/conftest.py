"""Pytest configuration module"""

# Silence spurious `config` fixture false-positives
# pylint: disable=unused-argument


def pytest_emoji_passed(config):
    """Returns the pytest_emoji symbols for passed tests"""
    return "✅ ", "PASSED ✅ "


def pytest_emoji_failed(config):
    """Returns the pytest_emoji symbols for failed tests"""
    return "❌ ", "FAILED ❌ "


def pytest_emoji_skipped(config):
    """Returns the pytest_emoji symbols for skipped tests"""
    return "🙈 ", "SKIPPED 🙈 "


def pytest_emoji_error(config):
    """Returns the pytest_emoji symbols for tests that unexpectedly encountered errors"""
    return "🚫 ", "ERROR 🚫 "


def pytest_emoji_xfailed(config):
    """Returns the pytest_emoji symbols for xfailed tests"""
    return "❎️ ", "XFAIL ❎️ "


def pytest_emoji_xpassed(config):
    """Returns the pytest_emoji symbols for xfail tests that unexpectedly passed"""
    return "⛔️ ", "XPASS ⛔️ "


# pylint: enable=unused-argument
