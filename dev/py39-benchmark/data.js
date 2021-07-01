window.BENCHMARK_DATA = {
  "lastUpdate": 1625146594447,
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
          "id": "4c87803f940766b1f1fd84b39a7c37d0dee133cd",
          "message": "Merge pull request #237 from TeoZosa/dependabot/pip/cruft-2.9.0",
          "timestamp": "2021-07-01T13:30:39Z",
          "tree_id": "517fea36a63665b5f9ab2e7cc97c44b02f76deaf"
        },
        "date": 1625146592530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13916.334285548468,
            "unit": "iter/sec",
            "range": "stddev: 0.00007852795120172271",
            "extra": "mean: 71.8580036582233 usec\nrounds: 11481"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4107687.8967177826,
            "unit": "iter/sec",
            "range": "stddev: 6.033387833362835e-7",
            "extra": "mean: 243.44595430397325 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11757.012095163866,
            "unit": "iter/sec",
            "range": "stddev: 0.00008493821318555582",
            "extra": "mean: 85.05562398896744 usec\nrounds: 5811"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114814.03943500781,
            "unit": "iter/sec",
            "range": "stddev: 0.00001667723884366892",
            "extra": "mean: 8.709736238886228 usec\nrounds: 25125"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13681.890245226201,
            "unit": "iter/sec",
            "range": "stddev: 0.00008518750206659882",
            "extra": "mean: 73.08931602845695 usec\nrounds: 8591"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3798974.4347250666,
            "unit": "iter/sec",
            "range": "stddev: 8.161325941067411e-7",
            "extra": "mean: 263.2289364361512 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}