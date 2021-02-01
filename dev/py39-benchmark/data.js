window.BENCHMARK_DATA = {
  "lastUpdate": 1612204045123,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "886f8a2afd158dd5cc10b431e58d70bd25bd036c",
          "message": ":memo: Update `icontract` benchmark links",
          "timestamp": "2021-02-01T10:22:57-08:00",
          "tree_id": "05c20cd808a0d58fa2f20510aa511de1165eef0d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/886f8a2afd158dd5cc10b431e58d70bd25bd036c"
        },
        "date": 1612204044218,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14949.80023457089,
            "unit": "iter/sec",
            "range": "stddev: 0.00004471003020693468",
            "extra": "mean: 66.8905259140209 usec\nrounds: 5634"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3649822.1627740804,
            "unit": "iter/sec",
            "range": "stddev: 5.941133137975195e-7",
            "extra": "mean: 273.98595202763846 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13034.162098838246,
            "unit": "iter/sec",
            "range": "stddev: 0.00005034841951988976",
            "extra": "mean: 76.72146413532262 usec\nrounds: 9034"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 167014.54886969726,
            "unit": "iter/sec",
            "range": "stddev: 0.00003886252663988253",
            "extra": "mean: 5.987502326998997 usec\nrounds: 55866"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14732.479921914357,
            "unit": "iter/sec",
            "range": "stddev: 0.00009159546392365609",
            "extra": "mean: 67.87723487832581 usec\nrounds: 9192"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3861729.9694822766,
            "unit": "iter/sec",
            "range": "stddev: 2.8435780564980595e-7",
            "extra": "mean: 258.951301075569 nsec\nrounds: 5468"
          }
        ]
      }
    ]
  }
}