window.BENCHMARK_DATA = {
  "lastUpdate": 1612199463364,
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
          "id": "81e107b0d94a1e390291aef09bf939171c838932",
          "message": ":sparkles: Add `icontract` benchmarks",
          "timestamp": "2021-02-01T08:54:14-08:00",
          "tree_id": "f1b685fee82df392742eb7545da0ae2b26677782",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/81e107b0d94a1e390291aef09bf939171c838932"
        },
        "date": 1612198726128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14646.901265613156,
            "unit": "iter/sec",
            "range": "stddev: 0.00015697649114489664",
            "extra": "mean: 68.27382678872297 usec\nrounds: 12020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4133489.341160188,
            "unit": "iter/sec",
            "range": "stddev: 2.9730507993978977e-8",
            "extra": "mean: 241.92635264358452 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13973.274507682738,
            "unit": "iter/sec",
            "range": "stddev: 0.000044928214401178046",
            "extra": "mean: 71.56518677495268 usec\nrounds: 9225"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 178803.06862556803,
            "unit": "iter/sec",
            "range": "stddev: 7.370573477544945e-7",
            "extra": "mean: 5.592745178742444 usec\nrounds: 49262"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14912.210297788173,
            "unit": "iter/sec",
            "range": "stddev: 0.00012375002693986223",
            "extra": "mean: 67.05914012950335 usec\nrounds: 13459"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4202455.208605788,
            "unit": "iter/sec",
            "range": "stddev: 3.560668656184901e-8",
            "extra": "mean: 237.95613524937664 nsec\nrounds: 200000"
          }
        ]
      },
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
          "id": "8485c5e37a3f45a73cbe2cd62cac873d3a25cc4e",
          "message": ":sparkles: Add `icontract` benchmarks",
          "timestamp": "2021-02-01T09:06:44-08:00",
          "tree_id": "cdfcfba9a1c88488b81d4eef5934b3126c258a73",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/8485c5e37a3f45a73cbe2cd62cac873d3a25cc4e"
        },
        "date": 1612199462197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14400.574579544576,
            "unit": "iter/sec",
            "range": "stddev: 0.00006459023513128647",
            "extra": "mean: 69.44167362741615 usec\nrounds: 11876"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3820512.086690569,
            "unit": "iter/sec",
            "range": "stddev: 5.759204035905515e-7",
            "extra": "mean: 261.745016716844 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12978.336073292645,
            "unit": "iter/sec",
            "range": "stddev: 0.000028921637628961536",
            "extra": "mean: 77.05147981626406 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 170419.7093233471,
            "unit": "iter/sec",
            "range": "stddev: 0.000007214283545967239",
            "extra": "mean: 5.867865893977337 usec\nrounds: 54345"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14439.596729298906,
            "unit": "iter/sec",
            "range": "stddev: 0.000027592030589327345",
            "extra": "mean: 69.2540116422319 usec\nrounds: 6614"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3898669.342722861,
            "unit": "iter/sec",
            "range": "stddev: 3.530850512040672e-7",
            "extra": "mean: 256.4977719553304 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}