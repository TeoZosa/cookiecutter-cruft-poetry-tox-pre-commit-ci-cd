window.BENCHMARK_DATA = {
  "lastUpdate": 1623635554059,
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
          "id": "cebe6a90ac575f4821bc8e230d1d6c5e2ce1886f",
          "message": ":white_check_mark: Auto-update with `pyupgrade`",
          "timestamp": "2021-06-14T01:47:09Z",
          "tree_id": "5be6bac2e6877917cab58007086d78f6faafea1a"
        },
        "date": 1623635552639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14900.312150843609,
            "unit": "iter/sec",
            "range": "stddev: 0.000015298442406976994",
            "extra": "mean: 67.11268796763986 usec\nrounds: 12691"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4347392.609169101,
            "unit": "iter/sec",
            "range": "stddev: 2.0376472378659892e-7",
            "extra": "mean: 230.022933261446 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11996.82116804928,
            "unit": "iter/sec",
            "range": "stddev: 0.00005268101471296272",
            "extra": "mean: 83.35541440454789 usec\nrounds: 8803"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125914.52165424995,
            "unit": "iter/sec",
            "range": "stddev: 0.000005060461451040677",
            "extra": "mean: 7.941895715141665 usec\nrounds: 38462"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14625.804558377566,
            "unit": "iter/sec",
            "range": "stddev: 0.00002559395916012782",
            "extra": "mean: 68.37230704188553 usec\nrounds: 7924"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4083001.718540086,
            "unit": "iter/sec",
            "range": "stddev: 3.2421861660598604e-7",
            "extra": "mean: 244.91784939986735 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}