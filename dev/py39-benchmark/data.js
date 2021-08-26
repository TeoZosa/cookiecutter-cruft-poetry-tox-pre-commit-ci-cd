window.BENCHMARK_DATA = {
  "lastUpdate": 1629984454978,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "2eb4b90df77015980ebd598c9a7809fb24211719",
          "message": "Merge pull request #301 from TeoZosa/dependabot/pip/importlib-metadata-4.7.0",
          "timestamp": "2021-08-26T13:17:46Z",
          "tree_id": "228a67f67facc1e4c5151f512294df5c04c8cb3b"
        },
        "date": 1629984453009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15331.447979347471,
            "unit": "iter/sec",
            "range": "stddev: 0.00002224454171217585",
            "extra": "mean: 65.22541128190042 usec\nrounds: 1826"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3891504.814670992,
            "unit": "iter/sec",
            "range": "stddev: 6.306540854294591e-7",
            "extra": "mean: 256.97000199768354 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11865.514519648192,
            "unit": "iter/sec",
            "range": "stddev: 0.00006827746696153518",
            "extra": "mean: 84.27784554509564 usec\nrounds: 7452"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120643.12697951586,
            "unit": "iter/sec",
            "range": "stddev: 0.000015930400388698157",
            "extra": "mean: 8.288909820530359 usec\nrounds: 40486"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14658.16550139399,
            "unit": "iter/sec",
            "range": "stddev: 0.00009297326887455689",
            "extra": "mean: 68.22136098169311 usec\nrounds: 9452"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3990617.2157308757,
            "unit": "iter/sec",
            "range": "stddev: 2.3445236646647197e-7",
            "extra": "mean: 250.58780282298926 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}