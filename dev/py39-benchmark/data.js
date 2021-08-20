window.BENCHMARK_DATA = {
  "lastUpdate": 1629485712876,
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
          "id": "58a93aa524a3999246752a9e37249b6224580ee5",
          "message": ":art: Move `strong-version-tag*` targets to top of section\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-20T18:46:45Z",
          "tree_id": "9ce3ebe6188274bd4c664e985fb35718c451deb3"
        },
        "date": 1629485506044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16202.49603640009,
            "unit": "iter/sec",
            "range": "stddev: 0.0000480983694704526",
            "extra": "mean: 61.71888564289273 usec\nrounds: 12837"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4973796.198265096,
            "unit": "iter/sec",
            "range": "stddev: 2.727535598322871e-8",
            "extra": "mean: 201.05367412284647 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14634.136604874728,
            "unit": "iter/sec",
            "range": "stddev: 0.00002046729690568567",
            "extra": "mean: 68.33337879782354 usec\nrounds: 9150"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 171334.0976890016,
            "unit": "iter/sec",
            "range": "stddev: 5.47236017558648e-7",
            "extra": "mean: 5.83654983735437 usec\nrounds: 43291"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16911.730167319645,
            "unit": "iter/sec",
            "range": "stddev: 0.000006267368483828253",
            "extra": "mean: 59.13055554377326 usec\nrounds: 9515"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5804779.833538723,
            "unit": "iter/sec",
            "range": "stddev: 5.67537697622612e-9",
            "extra": "mean: 172.27182230448162 nsec\nrounds: 55556"
          }
        ]
      },
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
          "id": "22c5d613528dcab7774c87b30e7e4be7ad96df48",
          "message": ":art: Move `get-project-version-number*` below first usage\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-20T18:49:05Z",
          "tree_id": "383d52719b03fa35f1a5dc8ceaf84394cd660c35"
        },
        "date": 1629485710074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14503.77955957135,
            "unit": "iter/sec",
            "range": "stddev: 0.00011124631597149844",
            "extra": "mean: 68.94754542377741 usec\nrounds: 12020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4026713.744694704,
            "unit": "iter/sec",
            "range": "stddev: 7.098208320942151e-7",
            "extra": "mean: 248.3414673611383 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12193.486917475746,
            "unit": "iter/sec",
            "range": "stddev: 0.000031830972945735986",
            "extra": "mean: 82.01099544108229 usec\nrounds: 5264"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120209.93623986142,
            "unit": "iter/sec",
            "range": "stddev: 0.000008924613740942192",
            "extra": "mean: 8.318779888582968 usec\nrounds: 39371"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14632.44538375752,
            "unit": "iter/sec",
            "range": "stddev: 0.00008889267325333096",
            "extra": "mean: 68.3412767841274 usec\nrounds: 8111"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3943212.9518197626,
            "unit": "iter/sec",
            "range": "stddev: 8.702234115155885e-7",
            "extra": "mean: 253.60030315835294 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}