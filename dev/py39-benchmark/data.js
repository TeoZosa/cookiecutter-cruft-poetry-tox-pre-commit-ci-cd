window.BENCHMARK_DATA = {
  "lastUpdate": 1623521604628,
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
          "id": "5e28993a0c7d8863b9931936f88dfcbbc7c8a144",
          "message": ":memo: Follow naming conventions in corresponding upstream projects",
          "timestamp": "2021-06-12T18:07:56Z",
          "tree_id": "10af183fd20b161a99bdc255f57409e1b4278dff"
        },
        "date": 1623521603126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13669.820431894368,
            "unit": "iter/sec",
            "range": "stddev: 0.00006286200066208202",
            "extra": "mean: 73.15385048268844 usec\nrounds: 6113"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3514579.6096872203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018914379419941633",
            "extra": "mean: 284.5290507131679 nsec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11429.050934167712,
            "unit": "iter/sec",
            "range": "stddev: 0.00004784519754644328",
            "extra": "mean: 87.49632893930419 usec\nrounds: 8117"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 105772.44822191125,
            "unit": "iter/sec",
            "range": "stddev: 0.000031048020473386554",
            "extra": "mean: 9.454257860251035 usec\nrounds: 37594"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14039.04763945123,
            "unit": "iter/sec",
            "range": "stddev: 0.00005377207667019683",
            "extra": "mean: 71.22990288813415 usec\nrounds: 13263"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3597254.76347339,
            "unit": "iter/sec",
            "range": "stddev: 7.542241054266131e-7",
            "extra": "mean: 277.9897632363415 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}