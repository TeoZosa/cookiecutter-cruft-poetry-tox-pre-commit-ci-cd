window.BENCHMARK_DATA = {
  "lastUpdate": 1630074838051,
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
          "id": "dbe3336600b204c011a06947371979b6a5f5f9ab",
          "message": "Merge pull request #304 from TeoZosa/dependabot/pip/importlib-metadata-4.7.1",
          "timestamp": "2021-08-27T14:09:10Z",
          "tree_id": "563a2631c46749f9dadf222cd30d9c97d7e496b1"
        },
        "date": 1630074836753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16454.66324899399,
            "unit": "iter/sec",
            "range": "stddev: 0.00004545566652540465",
            "extra": "mean: 60.77304560220265 usec\nrounds: 11710"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5008080.6044822,
            "unit": "iter/sec",
            "range": "stddev: 1.3352369820962843e-8",
            "extra": "mean: 199.6772973472763 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14138.531844057217,
            "unit": "iter/sec",
            "range": "stddev: 0.00008896546759796215",
            "extra": "mean: 70.72870160987227 usec\nrounds: 9320"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 167607.41707486688,
            "unit": "iter/sec",
            "range": "stddev: 4.461756569603563e-7",
            "extra": "mean: 5.966323074791612 usec\nrounds: 40486"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16666.54587065176,
            "unit": "iter/sec",
            "range": "stddev: 0.00001396855818978222",
            "extra": "mean: 60.000434868805485 usec\nrounds: 14225"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5040791.326050551,
            "unit": "iter/sec",
            "range": "stddev: 1.3743669539338633e-8",
            "extra": "mean: 198.38155069664538 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}