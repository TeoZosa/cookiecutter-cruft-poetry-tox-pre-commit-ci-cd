window.BENCHMARK_DATA = {
  "lastUpdate": 1623019864705,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "ec12e55f8076a73545237b1832518ce304beb795",
          "message": ":green_heart: Fix Publish Benchmark Workflow\n\nThe official Github Action doesn't support `workflow_run` events.\nConsequently, this functionality was added to a fork of this action.\n\nOnce testing is successful, a PR will be opened in the upstream project\nrepository.",
          "timestamp": "2021-06-06T22:46:16Z",
          "tree_id": "7d73a85e5b252031bcf4d3b781408bca9518adfb"
        },
        "date": 1623019863763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13889.534565901366,
            "unit": "iter/sec",
            "range": "stddev: 0.00010163400973616811",
            "extra": "mean: 71.99665296596673 usec\nrounds: 12019"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4665208.665592737,
            "unit": "iter/sec",
            "range": "stddev: 6.715811918343665e-7",
            "extra": "mean: 214.3526842380106 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11892.009001529159,
            "unit": "iter/sec",
            "range": "stddev: 0.00004670829604190215",
            "extra": "mean: 84.0900809839122 usec\nrounds: 5038"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 142125.80093550833,
            "unit": "iter/sec",
            "range": "stddev: 0.000008443140623584876",
            "extra": "mean: 7.036020155508321 usec\nrounds: 42370"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14008.340616421672,
            "unit": "iter/sec",
            "range": "stddev: 0.00006485580638086291",
            "extra": "mean: 71.38604260005799 usec\nrounds: 13568"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2737114.7734201136,
            "unit": "iter/sec",
            "range": "stddev: 4.815338331704437e-7",
            "extra": "mean: 365.3482161986461 nsec\nrounds: 3673"
          }
        ]
      }
    ]
  }
}