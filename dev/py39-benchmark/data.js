window.BENCHMARK_DATA = {
  "lastUpdate": 1626269417215,
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
          "id": "8d1d5c122dc4aad8a6e045f4cd0c9d26ae50452d",
          "message": "Merge pull request #245 from TeoZosa/dependabot/pip/tox-3.24.0",
          "timestamp": "2021-07-14T13:16:24Z",
          "tree_id": "783c74528af33a7c4541298a90eba45e869b9f09"
        },
        "date": 1626269416016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16146.555724506828,
            "unit": "iter/sec",
            "range": "stddev: 0.000009317007292854133",
            "extra": "mean: 61.9327128993972 usec\nrounds: 12062"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4170730.192199528,
            "unit": "iter/sec",
            "range": "stddev: 3.6579650645412294e-8",
            "extra": "mean: 239.76616897210556 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13362.43548686605,
            "unit": "iter/sec",
            "range": "stddev: 0.000018269524899910928",
            "extra": "mean: 74.8366569090568 usec\nrounds: 5261"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124053.97951676745,
            "unit": "iter/sec",
            "range": "stddev: 0.000006989762719464748",
            "extra": "mean: 8.061007022066853 usec\nrounds: 37311"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15625.9482149147,
            "unit": "iter/sec",
            "range": "stddev: 0.000018144426143995672",
            "extra": "mean: 63.99611634739178 usec\nrounds: 13262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4151288.33825605,
            "unit": "iter/sec",
            "range": "stddev: 4.0203730376787155e-8",
            "extra": "mean: 240.88907310634292 nsec\nrounds: 199961"
          }
        ]
      }
    ]
  }
}