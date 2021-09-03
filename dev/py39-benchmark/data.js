window.BENCHMARK_DATA = {
  "lastUpdate": 1630676742711,
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
          "id": "be3b43c75a622f6710038fe818c43f08362b09e1",
          "message": "Merge pull request #317 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.15.0",
          "timestamp": "2021-09-03T13:13:55Z",
          "tree_id": "5596404674ceb3df9c64e1476e911de056bf55f4"
        },
        "date": 1630676740920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16012.47597720268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054206832008862985",
            "extra": "mean: 62.451303684934324 usec\nrounds: 12210"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4398177.330191899,
            "unit": "iter/sec",
            "range": "stddev: 5.638066192382104e-8",
            "extra": "mean: 227.3669124559729 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13862.720227889027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071501300492237366",
            "extra": "mean: 72.1359144209085 usec\nrounds: 5492"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 142880.653691932,
            "unit": "iter/sec",
            "range": "stddev: 0.00000172674483587896",
            "extra": "mean: 6.998848158660592 usec\nrounds: 38909"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16060.849005955964,
            "unit": "iter/sec",
            "range": "stddev: 0.000005820923444899702",
            "extra": "mean: 62.26320910116038 usec\nrounds: 13405"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4444702.939280745,
            "unit": "iter/sec",
            "range": "stddev: 7.704117459876251e-8",
            "extra": "mean: 224.98691446006947 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}