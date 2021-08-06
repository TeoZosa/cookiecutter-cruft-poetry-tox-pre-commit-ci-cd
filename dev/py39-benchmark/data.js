window.BENCHMARK_DATA = {
  "lastUpdate": 1628257128000,
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
          "id": "7b579bee69331bd0e0582f291c877d8f4f9a4a3b",
          "message": "Merge pull request #269 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-06T13:11:18Z",
          "tree_id": "60e5eadac150f21e1ff56dbb84de40d2b7410272"
        },
        "date": 1628257125883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14774.190928325623,
            "unit": "iter/sec",
            "range": "stddev: 0.000021601447136862718",
            "extra": "mean: 67.68560152304266 usec\nrounds: 1576"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3575477.982199872,
            "unit": "iter/sec",
            "range": "stddev: 4.269723951781388e-7",
            "extra": "mean: 279.6828857505995 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11661.74116455932,
            "unit": "iter/sec",
            "range": "stddev: 0.000027268429824951494",
            "extra": "mean: 85.75048836095382 usec\nrounds: 8334"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 105338.1912409605,
            "unit": "iter/sec",
            "range": "stddev: 0.000014759391759882835",
            "extra": "mean: 9.493233064088843 usec\nrounds: 43104"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14300.158209532934,
            "unit": "iter/sec",
            "range": "stddev: 0.000042473926947882483",
            "extra": "mean: 69.92929626004897 usec\nrounds: 13316"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3406410.41349308,
            "unit": "iter/sec",
            "range": "stddev: 6.606973968427606e-7",
            "extra": "mean: 293.56415657927386 nsec\nrounds: 114943"
          }
        ]
      }
    ]
  }
}