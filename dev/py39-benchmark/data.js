window.BENCHMARK_DATA = {
  "lastUpdate": 1613399583771,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebe50adb082575ed642932a6b7cd2f3a39bf1f0f",
          "message": "Merge pull request #67 from TeoZosa/dependabot/pip/pytest-xdist-2.2.1",
          "timestamp": "2021-02-15T14:29:28Z",
          "tree_id": "be7cc4d32ffb966880856d585dc8d6f3b0bfa286",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/ebe50adb082575ed642932a6b7cd2f3a39bf1f0f"
        },
        "date": 1613399581944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14088.785031563346,
            "unit": "iter/sec",
            "range": "stddev: 0.000010534035717680349",
            "extra": "mean: 70.97844120409836 usec\nrounds: 12722"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5371784.920583083,
            "unit": "iter/sec",
            "range": "stddev: 1.3106212777238605e-7",
            "extra": "mean: 186.1578627559341 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12784.885043417999,
            "unit": "iter/sec",
            "range": "stddev: 0.00001432095510257307",
            "extra": "mean: 78.21736344159204 usec\nrounds: 5602"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 228575.6447148461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011054338003998036",
            "extra": "mean: 4.3749193018684265 usec\nrounds: 64512"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14107.518507297747,
            "unit": "iter/sec",
            "range": "stddev: 0.00001192072025202588",
            "extra": "mean: 70.88418841929607 usec\nrounds: 14144"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3020745.081728744,
            "unit": "iter/sec",
            "range": "stddev: 3.36119715954878e-7",
            "extra": "mean: 331.0441539898857 nsec\nrounds: 4507"
          }
        ]
      }
    ]
  }
}