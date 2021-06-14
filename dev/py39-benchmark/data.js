window.BENCHMARK_DATA = {
  "lastUpdate": 1623631546755,
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
          "id": "76309ae16d3c961f70b5e7fed1d138ccb4d8080e",
          "message": ":fire: Remove deprecated `cruft` skip directory",
          "timestamp": "2021-06-14T00:40:04Z",
          "tree_id": "e7f48039a51873c0233cab2fcd326425d9567ea6"
        },
        "date": 1623631545123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14894.011115771169,
            "unit": "iter/sec",
            "range": "stddev: 0.000059769392928376085",
            "extra": "mean: 67.14108054754348 usec\nrounds: 11248"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3965591.090456164,
            "unit": "iter/sec",
            "range": "stddev: 8.883678311989131e-7",
            "extra": "mean: 252.1692169436839 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13172.157847168806,
            "unit": "iter/sec",
            "range": "stddev: 0.00003227313222307249",
            "extra": "mean: 75.91770548171328 usec\nrounds: 8665"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122038.28727585633,
            "unit": "iter/sec",
            "range": "stddev: 0.000009523940865434768",
            "extra": "mean: 8.194149740397387 usec\nrounds: 45245"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15274.261141706942,
            "unit": "iter/sec",
            "range": "stddev: 0.00002595284456550013",
            "extra": "mean: 65.4696152385049 usec\nrounds: 10526"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4024475.8504827726,
            "unit": "iter/sec",
            "range": "stddev: 5.413840843120932e-7",
            "extra": "mean: 248.47956284267337 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}