window.BENCHMARK_DATA = {
  "lastUpdate": 1625491823948,
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
          "id": "c4d04e38cfe1a45adc77e5d04a7864598c5a35d0",
          "message": "Merge pull request #239 from TeoZosa/dependabot/pip/hypothesis-6.14.1",
          "timestamp": "2021-07-05T13:21:00Z",
          "tree_id": "3817fcccec0d180a1f350036d6c9da2fd565f146"
        },
        "date": 1625491822306,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15314.295001649294,
            "unit": "iter/sec",
            "range": "stddev: 0.00001249158847943115",
            "extra": "mean: 65.29846786236673 usec\nrounds: 1338"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4019680.9826740827,
            "unit": "iter/sec",
            "range": "stddev: 3.58333290365182e-7",
            "extra": "mean: 248.77596115469655 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12454.946824102857,
            "unit": "iter/sec",
            "range": "stddev: 0.000033166097951788865",
            "extra": "mean: 80.28938333681172 usec\nrounds: 9026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121412.24145907955,
            "unit": "iter/sec",
            "range": "stddev: 0.000005751318165695462",
            "extra": "mean: 8.236401766267013 usec\nrounds: 44053"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15196.162172991628,
            "unit": "iter/sec",
            "range": "stddev: 0.000016613419192025786",
            "extra": "mean: 65.80608897273518 usec\nrounds: 13004"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3986847.1765755983,
            "unit": "iter/sec",
            "range": "stddev: 3.209067518315906e-7",
            "extra": "mean: 250.82476345592266 nsec\nrounds: 181819"
          }
        ]
      }
    ]
  }
}